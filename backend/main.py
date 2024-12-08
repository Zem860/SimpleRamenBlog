from flask import request, jsonify
from config import app, db
from model import Ramen
from random import randint
@app.route("/menu", methods=["GET"])
def get_menu():
    ramens = Ramen.query.all()
    json_ramen = list(map(lambda r:r.to_json(),ramens))
    if not ramens:
        return jsonify({"message": "You must fill all of the form."},),400
    else:
        return jsonify({"ramens":json_ramen})


@app.route("/homepage", methods=["GET"])
def get_ramen():
    # ramens = Ramen.query.all()
    # if not ramens:
    r = [          {"id":1, 
                       "ramenName":"すごい煮干しラーメン",
                        "shopName":"すごい煮干ラーメン凪" ,
                        "imageUrl":"https://tblg.k-img.com/restaurant/images/Rvw/79017/640x640_rect_79017660.jpg",
                        "description":"Very tasty",
                        "rating":5},
                        {"id":2, 
                       "ramenName":"煮干しらーめん 玉",
                        "shopName":"拉麵 玉" ,
                        "imageUrl":"https://www.tokyoeki-1bangai.co.jp/street/ramen/assets/images/ramen/shop1_ramen.png",
                        "description":"Eggs!!!!!!!!!!!!!!!Super!!!!!",
                        "rating":5},
                            {"id": 3,
                                "ramenName": "塩ラーメン",
                                "shopName": "塩ラーメン専門店 Hirugao",
                                "imageUrl": "https://momoblog.tw/wp-content/uploads/collage1-6.jpg",  
                                "description": "Light flavor; I love it!",
                                "rating": 4}
                        ]
    json_ramen = [r[randint(0,2)]]
    
    # else:
    #     json_ramen = list(map(lambda r:r.to_json(),ramens))
    return jsonify({"ramens":json_ramen})

@app.route("/addRamen",methods=["POST"])
def add_ramen():
    ramen_name = request.json.get("ramenName")
    shop_name = request.json.get("shopName")
    image_url = request.json.get("imageUrl")
    description = request.json.get("description")
    rating = request.json.get("rating")
    if not ramen_name or not shop_name or not image_url or not description:
        return jsonify({"message": "You must fill all of the form."},),400
    new_ramen = Ramen(ramen_name=ramen_name, shop_name=shop_name, image_url=image_url, description=description,rating=rating)
    try:
        db.session.add(new_ramen)
        db.session.commit()
        print("commited")
    except Exception as e:
        return jsonify({"message":str(e)}),400
    return jsonify({"message":"Ramen Added"}),201
@app.route('/edit/<int:id>', methods=["PATCH"])
def edit_ramen(id):
    ramen = Ramen.query.filter_by(id=id).first()
    if not ramen:
        return jsonify({"message": "Ramen not found"}),404
    data= request.json
    ramen.ramen_name = data.get("ramenName", ramen.ramen_name)
    ramen.shop_name = data.get("shopName", ramen.ramen_name)
    ramen.image_url = data.get("imageUrl", ramen.image_url)
    ramen.rating = data.get("rating",ramen.rating)
    ramen.description = data.get("description", ramen.description)
    db.session.commit()
    return jsonify({"message":"Edit completed"}),200

@app.route('/delete/<int:id>',methods=["DELETE"])
def delete_ramen(id):
    ramen = Ramen.query.get(id)
    if not ramen:
        return jsonify({"message":"Ramen not found"}),404
    db.session.delete(ramen)
    db.session.commit()
    return jsonify({"message":"ramen delete successfully"}), 200


if __name__ =="__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)