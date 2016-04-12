from flask import Flask
from flask import render_template
from flask import request
from os import listdir
from os.path import isfile, join
from flask import jsonify
app = Flask(__name__)



# def hello_world():
#     return render_template("index.html")
@app.route('/')
@app.route('/day/')
def day():
    return render_template("day.html")

@app.route('/<day>/')
def time(day):
    return render_template("index.html", day = day)

@app.route('/get_images/',methods=["POST"])
def get_images():
    start = str(request.form["start"])[:-2]+".00"
    end = str(request.form["end"])[:-2]+".00"
    day = str(request.form["day"]).lower()

    onlyfiles = [f for f in listdir('/Users/Nihal/Documents/CS/CS 467/CS467AV/static/images/'+day+"/") if isfile(join('/Users/Nihal/Documents/CS/CS 467/CS467AV/static/images/'+day+"/", f))]
    image_names = list()
    for i in range(len(onlyfiles)):
        onlyfiles[i] = onlyfiles[i][:-4]
        if onlyfiles[i] >= start and onlyfiles[i] <= end:
            image_names.append(onlyfiles[i] + str(".PNG"))

    print image_names
    return jsonify({"images":image_names})
if __name__ == '__main__':
    app.run(debug=True)
