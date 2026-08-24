import random
import math

game_number = None
max_guesses = 0
attempts = 0


def start_game(lower, upper):
    global game_number, max_guesses, attempts

    if lower > upper:
        return "Lower bound must be less than or equal to upper bound."

    game_number = random.randint(lower, upper)

    max_guesses = round(math.log(upper - lower + 1, 2))

    if max_guesses < 1:
        max_guesses = 1

    attempts = 0

    return f"You've only {max_guesses} chances to guess the number!"


def check_guess(guess):
    global game_number, max_guesses, attempts

    attempts += 1

    if game_number == guess:
        return (
            f"🎉 Congrats! You found it in {attempts} try!\n"
            f"The number is: {game_number}"
        )

    if game_number < guess:
        message = "The guess is too high!"
    else:
        message = "The guess is too low!"

    if attempts >= max_guesses:
        return (
            f"{message}\n\n"
            f"The number was: {game_number}\n"
            f"TRY AGAIN?"
        )

    remaining = max_guesses - attempts

    return f"{message}\n\nChances remaining: {remaining}"


def is_game_over():
    return attempts >= max_guesses


def get_attempts():
    return attempts