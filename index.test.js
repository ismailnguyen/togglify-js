import Togglify from './index'

describe('togglify-js', () => {
	
	it('Should give negative when repository is empty', () => {
		// Given
		const featureName = 'poo feature';
		const emptyFeaturesRepository = [];
		const toggler = new Togglify(emptyFeaturesRepository);
		
		// When
		const isFeatureEnabled = toggler.isOn(featureName);
		
		// Then
		expect(isFeatureEnabled).toBeFalsy();
	})
	
	it('Should give all features available from given repository', () => {
		// Given
		const featureName = 'poo feature';
		const featuresRepository = [
			{
				name: 'poo feature',
				isEnabled: true
			}
		];
		const toggler = new Togglify(featuresRepository);
		
		// When
		const isFeatureEnabled = toggler.isOn(featureName);
		
		// Then
		expect(isFeatureEnabled).toBeTruthy();
	})
})