module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        phone: String,
        area: String,
        city: String,
        address: String,
        deliveryDate : String,
        // packageType : String,
        clientComments: String,
        products: [],
        isDelivered: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Order = mongoose.model("order", schema);
    return Order;
  };