module.exports = mongoose => {

    var city = mongoose.Schema({
        name: String
    });

    var schema = mongoose.Schema(
      {
        name: String,
        deliveryFee: String,
        cities : [city]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const area = mongoose.model("area", schema);
    return area;
  };