import React from 'react';
import { ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import { getDeviceWidth } from '../../util/commonUtility';

const HTMLRenderComponent = (props) => {

	return (
		<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
			<HTML html={props.html} imagesMaxWidth={getDeviceWidth() - 100} />
		</ScrollView>
	);
};

export default HTMLRenderComponent;