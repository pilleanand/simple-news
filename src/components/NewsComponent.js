import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { fetchNewsDataApi } from '../apis/NewsApi';
import SpinnerComponent from './common/SpinnerComponent';
import HTMLRenderComponent from './common/HTMLRenderComponent';
import { getRelativeDate } from '../util/DateUtility';

const NewsComponent = (props) => {
  const [newsData, setNewsData] = React.useState([]);
  const [showProgress, setShowProgress] = React.useState(true);

  React.useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    const newsData = await fetchNewsDataApi();
    setShowProgress(false);
    setNewsData(newsData.articles);
  }

  renderArticleItem = ({ item }) => ((
    <Card>
      <CardItem>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: item.urlToImage }} style={{ height: 200, width: null, flex: 1 }} />
      </CardItem>
      <CardItem>
        <Left>
          <Icon active name="newspaper" />
          <Text>{item.author}</Text>
        </Left>
        <Right>
          <Text>{getRelativeDate(item.publishedAt)}</Text>
        </Right>
      </CardItem>
    </Card>
  ));

  return (
    <>
      <SpinnerComponent showProgress={showProgress} />
      <FlatList
        data={newsData}
        renderItem={renderArticleItem}
        keyExtractor={(item) => 'articles' + Math.random() * 1000}
        style={styles.flatlistStyle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cardStyle: { marginBottom: 0, marginRight: 10 },
  itemText: {
    fontSize: 18,
    color: 'black'
  },
  flatlistStyle: { marginTop: 20, marginBottom: 10 },
  cardItemStyle: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15
  }
});

export default NewsComponent;