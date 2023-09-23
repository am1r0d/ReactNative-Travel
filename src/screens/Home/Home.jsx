import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Title from "../../components/Title/Title";
import styles from "./HomeStyle";
import Categories from "../../components/Categories/Categories";
import AttractionCard from "../../components/AttractionCard/AttractionCard";
import jsonData from "../../data/attractions.json";

const Home = () => {
    // useState
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log("JosnData:>>", jsonData);
        setData(jsonData);
    }, []);
    //
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" style={{ fontWeight: "normal" }} />
                <Title text="you want to go" />

                <Title text="Explore Attractions" style={styles.subtitle} />
                <Categories
                    selectedCategory={selectedCategory}
                    onCategoryPress={setSelectedCategory}
                    categories={[
                        "All",
                        "Popular",
                        "Historical",
                        "Random",
                        "Trending",
                        "Exclusive",
                    ]}
                />
                <ScrollView contentContainerStyle={styles.row}>
                    {data?.map((item, index) => (
                        <AttractionCard
                            key={item.id}
                            style={index % 2 === 0 ? { marginRight: 12 } : {}}
                            title={item.title}
                            subtitle={item.city}
                            imageSrc={
                                item.images?.length ? item?.images[0] : null
                            }
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);
