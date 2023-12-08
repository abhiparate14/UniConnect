import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Rating from '../components/Rating'
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import app from '../components/firebase_config';

const InstructerRating = (p) => {
  const id =p.route.params.id;
  const uni_id = p.route.params.uni;
  console.log('id:',id,'uni:',uni_id);
  const [rating, setRating] = useState(0);


  const handleRatingPress = async (newRating) => {
    try {
      // Assuming you have a 'universities' collection in Firestore
      const db = getFirestore(app);
      const universityRef = doc(db, 'university', uni_id);
      // Update the 'rating' field in the Firestore document
      await updateDoc(universityRef, {
        rating: newRating,
      });

      // Update the UI with the new rating
      setRating(newRating);
    } catch (error) {
      console.error('Error updating rating:', error);
      // Handle error (e.g., show a notification to the user)
    }
  }
  console.log(rating)
  return (
    <View>
      <Text>InstructerRating</Text>
      <Rating
        rating={rating} 
        onRatingPress={handleRatingPress}

      />
    </View>
  )
}

export default InstructerRating

const styles = StyleSheet.create({})