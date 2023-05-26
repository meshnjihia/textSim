'use client'

import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from 'react-toastify'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this non-reusable component.
 */

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    try {
      setIsLoading(true)
      await signOut()
    } catch (error) {
      toast.error('Error Signing out! Try again later.')
    }
  }

  return (
      <Button
          onClick={signUserOut}
          isLoading={isLoading}>
      Sign out
    </Button>
  )
}

export default SignOutButton
