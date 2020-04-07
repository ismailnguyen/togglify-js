import Togglify from './index'

describe('togglify-js', () => {
	
	describe('Empty repository', () => {
		it('Nothing enabled', () => {
			// Given
			const featureName = 'poo feature';
			const emptyFeaturesRepository = [];
			const toggler = new Togglify(emptyFeaturesRepository);
			
			// When
			const isFeatureEnabled = toggler.isOn(featureName);
			
			// Then
			expect(isFeatureEnabled).toBeFalsy();
		})
	})
	
	describe('Should tell if asked feature is enabled on given repository', () => {
		it('Disabled feature', () => {
			// Given
			const featureName = 'poo feature';
			const featuresRepository = [
				{
					name: 'poo feature',
					isEnabled: false
				}
			];
			const toggler = new Togglify(featuresRepository);
			
			// When
			const isFeatureEnabled = toggler.isOn(featureName);
			
			// Then
			expect(isFeatureEnabled).toBeFalsy();
		})
		
		it('Disabled feature (without isEnabled attribute)', () => {
			// Given
			const featureName = 'poo feature';
			const featuresRepository = [
				{
					name: 'poo feature'
				}
			];
			const toggler = new Togglify(featuresRepository);
			
			// When
			const isFeatureEnabled = toggler.isOn(featureName);
			
			// Then
			expect(isFeatureEnabled).toBeFalsy();
		})
		
		it('Enabled feature', () => {
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
})