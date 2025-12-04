#!/usr/bin/env python3
"""
Module that finds schools by topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic
    
    Args:
        mongo_collection: pymongo collection object
        topic: topic searched (string)
    
    Returns:
        List of schools that have the specified topic
    """
    # Find all documents where topics array contains the topic
    # Use $in operator to check if topic is in the topics array
    schools = list(mongo_collection.find({"topics": topic}))
    
    return schools
