
function Togglify (featuresRepository) {
	this.featuresRepository = featuresRepository || [];
}

Togglify.prototype.isOn = function (featureName) {
	return this.featuresRepository.find(feature => feature.name === featureName) !== undefined;
}


module.exports = Togglify;