import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InsructerChat from '../../screens/InsructerChat';
import { doc, getDoc } from 'firebase/firestore';

// Mock navigation and route for testing purposes
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        id: 'testInstructorId',
      },
    }),
  };
});

// Mock Firestore
jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
    doc: jest.fn(),
    getDoc: jest.fn(),
  };
});

describe('InsructerChat Screen', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<InsructerChat />);
    expect(getByText('Your Chats')).toBeTruthy();
  });

  it('interacts with Firestore correctly', async () => {
    const mockDocRef = { id: 'testDocId' };
    doc.mockReturnValue(mockDocRef);
    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({
        chatwith: ['student1@example.com', 'student2@example.com'],
      }),
    });

    render(<InsructerChat />);
    expect(doc).toHaveBeenCalledWith(expect.anything(), 'instructor', 'testInstructorId');
    expect(getDoc).toHaveBeenCalledWith(mockDocRef);
  });
});
