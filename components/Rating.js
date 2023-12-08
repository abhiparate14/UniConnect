// Rating.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Rating = ({ rating, onRatingPress }) => {
  return (
    <View>
      <Text>Rating: {rating}</Text>
      <TouchableOpacity onPress={() => onRatingPress(1)}>
        <Ionicons name={rating >= 1 ? 'star' : 'star-outline'} size={30} color="gold" />
      </TouchableOpacity>
      {/* Repeat for additional stars */}
    </View>
  );
};

export default Rating;
