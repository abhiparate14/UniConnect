import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StudentChatScreen from '../../screens/StudentChatScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('StudentChatScreen', () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      // Initial state of the store
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <StudentChatScreen />
      </Provider>
    );

    expect(getByText('Your Chats')).toBeTruthy();
  });

  // Add more tests to verify the interaction with the Firestore database
});
