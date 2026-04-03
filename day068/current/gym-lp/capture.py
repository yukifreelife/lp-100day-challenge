#!/usr/bin/env python3
"""Screenshot capture for IRON ZONE gym LP"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

# URL
URL = "http://localhost:8080/day068/current/gym-lp/"

# Output directory
OUTPUT_DIR = "/Users/yuuki/Works/lp-100/day068"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--window-size=1920,1080")
chrome_options.add_argument("--hide-scrollbars")

# Driver
driver = webdriver.Chrome(options=chrome_options)

try:
    # Hero screenshot
    driver.get(URL)
    time.sleep(2)

    hero_path = os.path.join(OUTPUT_DIR, "screenshot-hero.png")
    driver.save_screenshot(hero_path)
    print(f"Saved: {hero_path}")

    # Full page screenshot
    # Get total page height
    total_height = driver.execute_script("return document.body.scrollHeight")
    driver.set_window_size(1920, total_height)
    time.sleep(1)

    full_path = os.path.join(OUTPUT_DIR, "screenshot-full.png")
    driver.save_screenshot(full_path)
    print(f"Saved: {full_path}")

    # Mobile screenshot
    driver.set_window_size(375, 667)
    time.sleep(1)

    mobile_path = os.path.join(OUTPUT_DIR, "screenshot-mobile.png")
    driver.save_screenshot(mobile_path)
    print(f"Saved: {mobile_path}")

    print("\nAll screenshots captured successfully!")

except Exception as e:
    print(f"Error: {e}")

finally:
    driver.quit()
