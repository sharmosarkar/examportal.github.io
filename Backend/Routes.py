import config
import MySQLdb

hostname = config.hostname
username = config.username
password = config.password
database = config.database
conn = MySQLdb.connect(hostname, username, password, database)


def auth(username, password):
    query = "SELECT Password from users where Username = '"+username+"'"
    cur = conn.cursor()
    try:
        cur.execute(query)
        results = cur.fetchone()
        if results is None:
            return 'User Not Activated !!'
        retrieved_pass = ''
        for row in results:
            print row
            retrieved_pass = row
        if password == retrieved_pass:
            return 'Access Granted !!'
        else:
            return 'Access Denied !!'
    except:
        print "Error: unable to fecth data"
    conn.close()
    return None

# auth('admin', 'admin')
