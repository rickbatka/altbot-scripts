module.exports = function(robot){
	
	robot.hear(/badger/i, function(res){
		res.send("discussing badgers is a bannable offense.");
	});
	
};