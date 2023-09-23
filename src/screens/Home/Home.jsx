import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Title from "../../components/Title/Title";
import styles from "./HomeStyle";
import Categories from "../../components/Categories/Categories";
import AttractionCard from "../../components/AttractionCard/AttractionCard";

const Home = () => {
    // useState
    const [selectedCategory, setSelectedCategory] = useState("All");

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
                <View style={styles.row}>
                    <AttractionCard
                        title="Entertainment Park"
                        subtitle="Somewhere"
                        imageSrc="https://jurasikparkinn.com/wp-content/uploads/2022/03/Theme_park_AdobeStock_222547272_1.jpg"
                    />
                    <AttractionCard
                        title="Entertainment Park"
                        subtitle="Somewhere"
                        imageSrc="https://jurasikparkinn.com/wp-content/uploads/2022/03/Theme_park_AdobeStock_222547272_1.jpg"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Home);
