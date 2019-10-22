import random

rand_number = random.randrange(0,100)
heart = """           
 .:::.   .:::.
:::::::.:::::::
:::::::::::::::
':::::::::::::'
  ':::::::::'
    ':::::'
      ':'  """

guess = 0
while guess != rand_number:
    guess = (int)(input("Guess a number between 0 & 100: "))
    if guess < rand_number:
        print ("Too Low, try again")
    elif guess > rand_number:
        print ("Too High try again")
    else:
        print("Wowee, you got it right, here have a heart " + heart)