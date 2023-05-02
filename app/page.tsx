

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Input } from '@/app/ui/input'
import { Button } from '@/app/ui/button'
import { Toast } from './ui/toast'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input type="email" placeholder="Password" valid={false}/>
      <input type="password" placeholder="Password" maxLength={5}/>
      <Button variant="ghost">
        <h1>hello</h1>
      </Button>
    </main>
  )
}
