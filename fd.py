import hashlib
import json
import os
import sys
from typing import Dict, Any
from tabulate import tabulate

# Database file
DATA_FILE = "food_redistribution_data.json"

# Blockchain utility
class Blockchain:
    def __init__(self):
        self.chain = []
        self.create_block(previous_hash='0')

    def create_block(self, data: Dict[str, Any] = None, previous_hash: str = None) -> Dict[str, Any]:
        block = {
            'index': len(self.chain) + 1,
            'data': data if data else {},
            'previous_hash': previous_hash or self.get_last_hash(),
            'hash': ''
        }
        block['hash'] = self.hash_block(block)
        self.chain.append(block)
        return block

    def get_last_hash(self) -> str:
        return self.chain[-1]['hash'] if self.chain else '0'

    @staticmethod
    def hash_block(block: Dict[str, Any]) -> str:
        encoded_block = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(encoded_block).hexdigest()

# Load Data
def load_data() -> Dict[str, Any]:
    if not os.path.exists(DATA_FILE):
        return {"users": {}, "donations": {}, "tasks": {}, "blockchain": Blockchain().chain, "crisis_mode": False}
    try:
        with open(DATA_FILE, "r") as file:
            return json.load(file)
    except json.JSONDecodeError:
        print("Error reading data file. Starting with empty data.")
        return {"users": {}, "donations": {}, "tasks": {}, "blockchain": Blockchain().chain, "crisis_mode": False}

def save_data(data: Dict[str, Any]) -> None:
    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)

def clear_console() -> None:
    os.system('cls' if os.name == 'nt' else 'clear')

def main_menu() -> None:
    data = load_data()
    while True:
        clear_console()
        print("Welcome to the Food Redistribution Platform")
        print("1. Login")
        print("2. Create Account")
        print("3. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            login(data)
        elif choice == "2":
            register(data)
        elif choice == "3":
            break
        else:
            print("Invalid option!")

# Registration
def register(data: Dict[str, Any]) -> None:
    clear_console()
    name = input("Enter your name: ")
    email = input("Enter your email: ")
    password = input("Set your password: ")
    print("Select Your Role:")
    print("1. Donor")
    print("2. NGO")
    print("3. Volunteer")
    print("4. Admin")
    role_choice = input("Enter your choice: ")
    roles = {"1": "Donor", "2": "NGO", "3": "Volunteer", "4": "Admin"}
    role = roles.get(role_choice)
    if not role:
        print("Invalid role!")
        return

    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    data["users"][email] = {"name": name, "password": hashed_password, "role": role, "points": 0}
    save_data(data)
    print("Account created successfully!")

# Login
def login(data: Dict[str, Any]) -> None:
    clear_console()
    email = input("Enter your email: ")
    password = input("Enter your password: ")
    user = data["users"].get(email)
    if user and user["password"] == hashlib.sha256(password.encode()).hexdigest():
        print(f"Welcome back, {user['name']}!")
        if user["role"] == "Donor":
            donor_dashboard(email, data)
        elif user["role"] == "NGO":
            ngo_dashboard(email, data)
        elif user["role"] == "Volunteer":
            volunteer_dashboard(email, data)
        elif user["role"] == "Admin":
            admin_dashboard(data)
    else:
        print("Invalid credentials!")

# Donor Features
def donor_dashboard(email: str, data: Dict[str, Any]) -> None:
    while True:
        print("1. Add Donation")
        print("2. View Donations")
        print("3. View Rewards")
        print("4. View Leaderboard")
        print("5. Logout")
        choice = input("Enter your choice: ")
        if choice == "1":
            add_donation(email, data)
        elif choice == "2":
            view_donations(data)
        elif choice == "3":
            print(f"Your current reward points: {data['users'][email]['points']}")
        elif choice == "4":
            view_leaderboard(data)
        elif choice == "5":
            break

def add_donation(email: str, data: Dict[str, Any]) -> None:
    item = input("Enter the food item: ")
    quantity = input("Enter the quantity: ")
    expiry = input("Enter the expiry date (YYYY-MM-DD): ")
    donation_id = str(len(data["donations"]) + 1)
    data["donations"][donation_id] = {"donor": email, "item": item, "quantity": quantity, "expiry": expiry, "claimed": False}
    data["users"][email]["points"] += 10
    blockchain = Blockchain()
    blockchain.create_block(data["donations"][donation_id])
    data["blockchain"] = blockchain.chain
    save_data(data)
    print("Donation added successfully!")

def view_donations(data: Dict[str, Any]) -> None:
    print("\nAll Donations:")
    for donation_id, donation in data["donations"].items():
        status = "Claimed" if donation["claimed"] else "Pending"
        print(f"{donation_id}. {donation['item']} - {donation['quantity']} (Status: {status})")

# Admin Dashboard
def admin_dashboard(data: Dict[str, Any]) -> None:
    while True:
        print("\nAdmin Dashboard")
        print("1. View All Users")
        print("2. View All Donations")
        print("3. Activate/Deactivate Crisis Mode")
        print("4. View Leaderboard")
        print("5. Manage Notifications")
        print("6. Logout")
        choice = input("Enter your choice: ")
        if choice == "1":
            view_all_users(data)
        elif choice == "2":
            view_all_donations(data)
        elif choice == "3":
            toggle_crisis_mode(data)
        elif choice == "4":
            view_leaderboard(data)
        elif choice == "5":
            send_notification(data)
        elif choice == "6":
            break

def view_all_users(data: Dict[str, Any]) -> None:
    print("\nAll Registered Users:")
    for email, user in data["users"].items():
        print(f"{user['name']} ({user['role']})")

def view_all_donations(data: Dict[str, Any]) -> None:
    print("\nAll Donations:")
    for donation_id, donation in data["donations"].items():
        status = "Claimed" if donation["claimed"] else "Pending"
        print(f"{donation_id}. {donation['item']} - {donation['quantity']} (Status: {status})")

def toggle_crisis_mode(data: Dict[str, Any]) -> None:
    data["crisis_mode"] = not data["crisis_mode"]
    status = "Activated" if data["crisis_mode"] else "Deactivated"
    print(f"Crisis Mode {status}!")
    save_data(data)

def send_notification(data: Dict[str, Any]) -> None:
    message = input("Enter notification message: ")
    print(f"Notification sent: {message}")

# Volunteer Dashboard
def volunteer_dashboard(email: str, data: Dict[str, Any]) -> None:
    while True:
        print("1. View Available Tasks")
        print("2. Accept Delivery Task")
        print("3. View Leaderboard")
        print("4. Logout")
        choice = input("Enter your choice: ")
        if choice == "1":
            view_tasks(data)
        elif choice == "2":
            accept_task(email, data)
        elif choice == "3":
            view_leaderboard(data)
        elif choice == "4":
            break

def view_tasks(data: Dict[str, Any]) -> None:
    available_tasks = {task_id: task for task_id, task in data["tasks"].items() if not task.get("completed")}
    if not available_tasks:
        print("No available tasks at the moment.")
    else:
        print("Available Tasks:")
        for task_id, task in available_tasks.items():
            print(f"{task_id}. Pick up {task['item']} from {task['donor']} and deliver to {task['ngo']}")

def accept_task(email: str, data: Dict[str, Any]) -> None:
    view_tasks(data)
    task_id = input("Enter the task number to accept (or press Enter to go back): ")
    if not task_id:
        return
    if task_id in data["tasks"] and not data["tasks"][task_id].get("completed"):
        data["tasks"][task_id]["completed"] = True
        data["tasks"][task_id]["volunteer"] = email
        data["users"][email]["points"] += 15
        save_data(data)
        print("Task accepted successfully! Please complete the delivery.")
    else:
        print("Invalid task number or already completed.")

# NGO Dashboard
def ngo_dashboard(email: str, data: Dict[str, Any]) -> None:
    while True:
        print("1. View Donations")
        print("2. Claim Donation")
        print("3. View Notifications")
        print("4. Logout")
        choice = input("Enter your choice: ")
        if choice == "1":
            view_donations(data)
        elif choice == "2":
            claim_donation(email, data)
        elif choice == "3":
            view_notifications(email, data)
        elif choice == "4":
            break

def claim_donation(email: str, data: Dict[str, Any]) -> None:
    view_donations(data)
    donation_id = input("Enter the donation number you want to claim: ")
    if donation_id in data["donations"] and not data["donations"][donation_id]["claimed"]:
        data["donations"][donation_id]["claimed"] = True
        data["donations"][donation_id]["ngo"] = email
        data["users"][email]["points"] += 20

        # Create a new task for this claimed donation
        task_id = str(len(data["tasks"]) + 1)
        data["tasks"][task_id] = {
            "item": data["donations"][donation_id]["item"],
            "quantity": data["donations"][donation_id]["quantity"],
            "donor": data["donations"][donation_id]["donor"],
            "ngo": email,
            "completed": False
        }

        save_data(data)
        print("Donation claimed successfully! A task has been created for volunteers.")
    else:
        print("Invalid or already claimed donation.")

def view_notifications(email: str, data: Dict[str, Any]) -> None:
    print("Notifications:")
    if data["crisis_mode"]:
        print("Crisis Mode is active! Prioritize urgent donations.")

# Leaderboard
def view_leaderboard(data: Dict[str, Any]) -> None:
    sorted_users = sorted(data["users"].items(), key=lambda x: x[1]["points"], reverse=True)
    print("Leaderboard:")
    for user, details in sorted_users:
        print(f"{details['name']} - {details['points']} points")

if __name__ == "__main__":
    try:
        main_menu()
    except KeyboardInterrupt:
        print("\nExiting the program. Thank you for using the Food Redistribution Platform!")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        sys.exit(1)



