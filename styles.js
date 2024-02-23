import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor:'#61daaf',
    backgroundColor:'#040918',
    color:'#fff',
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    elevation: 10,
    shadowColor: '#61daaf', 
    shadowOpacity: 1, 
    shadowOffset: { width: 1, height: 1 }, 
    shadowRadius: 10,
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    backgroundColor: '#269c7d',
    marginLeft: 20,
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#61daaf', 
    shadowOpacity: 1, 
    shadowOffset: { width: 1, height: 1 }, 
    shadowRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#ffffff',
  
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom:50,
    borderRadius:10
  },
  button: {
    height: 30,
    width: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight:5
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 200,
    backgroundColor: '#040918',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#61daaf', 
    shadowOpacity: 1, 
    shadowOffset: { width: 0, height: 1 }, 
    shadowRadius: 10, 
  },
  
  modalInput: {
    color:'#fff',
    textAlignVertical:'top',
    borderWidth: 1,
    borderColor: '#269c7d',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 50,
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  modalButtonText: {
    color: '#000',
    fontWeight:'700',
    fontSize: 16,
  },
});

export default styles;
