import React from 'react';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Right } from 'native-base';
import { fetchNewsDataApi } from '../../apis/NewsApi';
import { getRelativeDate } from '../../util/DateUtility';
import { getDeviceHeight } from '../../util/commonUtility';

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

  const onNewsItemPress = (article) => {
    props.navigation.navigate('NewsDetails', { article });
  }

  renderArticleItem = ({ item }) => ((
    <TouchableOpacity onPress={() => onNewsItemPress(item)}>
      <Card>
        <CardItem>
          <Text numberOfLines={2} style={styles.articleTitleTextStyle}>{item.title}</Text>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: item.urlToImage }} style={styles.articleImageStyle} />
        </CardItem>
        <CardItem>
          <Left>
            <Icon style={styles.authorIconStyle} active name="newspaper" />
            <Text numberOfLines={1} style={styles.authorNameStyle}>{item.author}</Text>
          </Left>
          <Right>
            <Text numberOfLines={1} style={styles.articleRelativeDateTextStyle}>{getRelativeDate(item.publishedAt)}</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
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
  flatlistStyle: { marginTop: 5, marginBottom: 10 },
  cardItemStyle: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 15
  },
  articleTitleTextStyle: { fontWeight: 'bold', color: '#0f2873' },
  articleImageStyle: { height: 200, width: null, flex: 1 },
  authorIconStyle: { fontSize: 14, color: '#333' },
  authorNameStyle: { fontSize: 14, color: '#333' },
  articleRelativeDateTextStyle: { fontSize: 12, color: '#333' }
});

export default NewsComponent;