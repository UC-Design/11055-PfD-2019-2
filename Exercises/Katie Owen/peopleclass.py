class people:
    fn = ""
    ln = ""
    def __init__(self, firstname, lastname):
        self.fn = firstname
        self.ln = lastname

    def printer (self):
        print(self.fn + " " + self.ln + "!")
        
