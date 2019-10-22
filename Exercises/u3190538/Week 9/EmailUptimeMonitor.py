import datetime
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

user = 'lachlan@predraw.com'
password = '******'
target = 'pyrofuzion@gmail.com'
administrator = 'pyrofuzion@gmail.com'

deliveryFrequency = 10  # 3600 seconds in 1 hour
timeSent = datetime.datetime.now()


def sendEmail():
    threading.Timer(deliveryFrequency, sendEmail).start()

    subject = 'Uptime Monitor: ' + timeSent.strftime("%H:%M - %b %d %Y")

    message = MIMEMultipart()
    message['From'] = user
    message['To'] = target
    message['Subject'] = subject

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(user, password)
    text = message.as_string()
    server.sendmail(user, target, text)
    server.quit()


sendEmail()

print("Monitoring active...\n"
      "____________________\n"
      "\nSending from:\t" + user +
      "\nSending to:\t" + target +
      "\nSending every:\t" + str(deliveryFrequency) + " seconds")


def sendAlert():
    # If reply is not received for the given amount of time then send alert

    print("\nReply not received at " + timeSent.strftime("%H:%M - %b %d %Y"))

    subject = 'ALERT: Reply not received'

    message = MIMEMultipart()
    message['From'] = user
    message['To'] = administrator
    message['Subject'] = subject

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(user, password)
    text = message.as_string()
    server.sendmail(user, target, text)
    server.quit()

    print("\nAlert sent to " + administrator)


sendAlert()
