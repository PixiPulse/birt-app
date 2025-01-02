import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '@/components/container/container'
import Header from '@/components/login/Header'
import LoginForm from '@/components/login/LoginForm'

export default function LoginScreen() {
  return (
    <Container>
      <Header />
      <LoginForm />
    </Container>
  )
}

const styles = StyleSheet.create({})