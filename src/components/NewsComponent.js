import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Right } from 'native-base';
import { fetchNewsDataApi } from '../apis/NewsApi';
import { getRelativeDate } from '../util/DateUtility';
import { getDeviceHeight } from '../util/commonUtility';

const NewsComponent = (props) => {
  const [newsData, setNewsData] = React.useState([]);
  const [showProgress, setShowProgress] = React.useState(true);

  React.useEffect(() => {
    fetchNewsData();
  }, [props.newsType]);

  const fetchNewsData = async () => {
    const newsData = await fetchNewsDataApi(props.newsType);
    setShowProgress(false);
    if (newsData) {
      setNewsData(newsData.articles);
    }
  }

  const onRefresh = () => {
    setShowProgress(true);
    fetchNewsData();
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
    <FlatList
      data={newsData}
      renderItem={renderArticleItem}
      onRefresh={onRefresh}
      refreshing={showProgress}
      keyExtractor={(item) => 'articles' + Math.random() * 1000}
      style={styles.flatlistStyle}
    />
  );
}

const styles = StyleSheet.create({
  cardStyle: { marginBottom: 0, marginRight: 10 },
  itemText: {
    fontSize: 18,
    color: 'black'
  },
  flatlistStyle: { marginTop: 20, marginBottom: 10, height: getDeviceHeight() - 40 },
  cardItemStyle: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15
  }
});

export default NewsComponent;