'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from 'react-toastify'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this non-reusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (error) {
      toast.error('Error Signing in! Try again later.')
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
