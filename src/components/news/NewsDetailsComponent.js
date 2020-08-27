import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Right } from 'native-base';
import { getRelativeDate } from '../../util/DateUtility';
import { getDeviceWidth } from '../../util/commonUtility';
import HTMLRenderComponent from '../common/HTMLRenderComponent';
import { ScrollView } from 'react-native-gesture-handler';

const NewsDetailsComponent = (props) => {
  const { route } = props;
  const { article } = route.params;
  const [imageHeight, setImageHeight] = React.useState(200);
  const [imageWidth, setImageWidth] = React.useState(getDeviceWidth() - 30);

  React.useState(() => {
    Image.getSize(article.urlToImage, (width, height) => {
      setImageWidth(getDeviceWidth() - 10);
      setImageHeight((getDeviceWidth() - 10) * (height / width));
    });
  }, []);

  return (
    <ScrollView>
      <Card style={styles.cardStyle}>
        <CardItem>
          <Text style={styles.articleTitleTextStyle}>{article.title}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: article.urlToImage }}
            style={{ height: imageHeight, width: imageWidth }} />
        </CardItem>
        <CardItem>
          <Left>
            <Icon style={styles.authorIconStyle} active name="newspaper" />
            <Text style={styles.authorNameStyle}>{article.author}</Text>
          </Left>
          <Right>
            <Text style={styles.articleRelativeDateTextStyle}>{getRelativeDate(article.publishedAt)}</Text>
          </Right>
        </CardItem>
        <CardItem style={{ paddingTop: 0 }}>
          <Left>
            <Icon style={styles.authorIconStyle} name="cloud" />
            <Text style={styles.authorNameStyle}>{article.source.name}</Text>
          </Left>
        </CardItem>
        <CardItem>
          <HTMLRenderComponent html={article.content} />
        </CardItem>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardStyle: { paddingTop: 10, paddingBottom: 15 },
  articleTitleTextStyle: { fontWeight: 'bold', color: '#0f2873' },
  authorIconStyle: { fontSize: 16, color: '#400a0e' },
  authorNameStyle: { fontSize: 16, color: '#400a0e' },
  articleRelativeDateTextStyle: { fontSize: 14, color: '#333' }
});

export default NewsDetailsComponent;