module.exports = mongoose => {

    var product = mongoose.Schema({
        name: String,
        description: String,
        price: String
    });

    var schema = mongoose.Schema(
      {
        name: String,
        products : [product]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const category = mongoose.model("category", schema);
    return category;
  };