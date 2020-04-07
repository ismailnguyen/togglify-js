function Togglify (featuresRepository) {
	this.featuresRepository = featuresRepository || [];
}

Togglify.prototype.isOn = function (featureName) {
	return this.featuresRepository
			.some(feature => feature.name === featureName
								&& feature.isEnabled);
}

module.exports = Togglify;