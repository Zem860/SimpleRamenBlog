from config import db
class Ramen(db.Model):
    id = db.Column(db.Integer, primary_key =True)
    ramen_name = db.Column(db.String(80), unique = False, nullable = False)
    shop_name = db.Column(db.String(80), unique=False, nullable = False)
    image_url = db.Column(db.String(2083), unique=False)
    description = db.Column(db.String(1000), unique=False)
    rating = db.Column(db.Integer,unique=False, nullable=False)
    def to_json(self):
        return{
            "id":self.id,
            "ramenName":self.ramen_name,
            "shopName":self.shop_name,
            "imageUrl":self.image_url,
            "description":self.description,
            "rating":self.rating,
       }