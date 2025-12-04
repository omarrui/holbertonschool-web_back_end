#!/usr/bin/env python3
"""
Script that provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stats():
    """
    Provides stats about Nginx logs in MongoDB
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    # Access the logs database and nginx collection
    nginx_collection = client.logs.nginx
    
    # Get total number of logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")
    
    # Print Methods header
    print("Methods:")
    
    # Define methods to check
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    # Count and print each method
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    
    # Count status checks (method=GET and path=/status)
    status_check = nginx_collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
