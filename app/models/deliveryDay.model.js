module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        text: String
        // value: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const DeliveryDay = mongoose.model("deliveryDay", schema);
    return DeliveryDay;
  };