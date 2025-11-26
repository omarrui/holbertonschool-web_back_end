#!/usr/bin/env python3
"""
This module provides a function that creates an asyncio.Task for the
wait_random coroutine from the previous task.
"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates and returns an asyncio.Task for wait_random(max_delay).

    Args:
        max_delay (int): Maximum delay for the wait_random coroutine.

    Returns:
        asyncio.Task: A task running wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
