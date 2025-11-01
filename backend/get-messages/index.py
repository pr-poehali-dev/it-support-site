import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get all contact form messages from database
    Args: event - dict with httpMethod
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with list of messages
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    cur.execute(
        "SELECT id, name, email, phone, message, created_at FROM contact_messages ORDER BY created_at DESC"
    )
    
    messages = cur.fetchall()
    
    cur.close()
    conn.close()
    
    messages_list = []
    for msg in messages:
        messages_list.append({
            'id': msg['id'],
            'name': msg['name'],
            'email': msg['email'],
            'phone': msg['phone'],
            'message': msg['message'],
            'created_at': msg['created_at'].isoformat() if msg['created_at'] else None
        })
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'messages': messages_list})
    }
