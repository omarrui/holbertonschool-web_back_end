#!/usr/bin/env python3
"""
Async coroutine that waits for a random delay.
"""

import asyncio
import random

async def wait_random(max_delay: int = 10) ->float:
    """
    Asynchronously waits for a random float delay between 0 and max_delay seconds.

    Args:
        max_delay (int, optional): Maximum number of seconds to wait. Defaults to 10.

    Returns:
        float: The actual delay time in seconds.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
