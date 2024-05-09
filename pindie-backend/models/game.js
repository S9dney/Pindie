

gameSchema.statics.findGameByCategory = function(category) {
  return this.find({}) 
    .populate({
      path: "categories",
      match: { name: category } 
    })
    .populate({
      path: "users",
      select: "-password" 
    })
   
};
