import json
from datetime import datetime
from typing import Dict, Any
from pathlib import Path

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save contact form messages to admin.txt file
    Args: event - dict with httpMethod, body containing name, email, phone, message
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    message = body_data.get('message', '')
    
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    entry = f"""
=====================================
Дата: {timestamp}
Имя: {name}
Email: {email}
Телефон: {phone}
Сообщение: {message}
=====================================

"""
    
    file_path = Path('/tmp/admin.txt')
    
    with open(file_path, 'a', encoding='utf-8') as f:
        f.write(entry)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, 'message': 'Сообщение сохранено'})
    }
