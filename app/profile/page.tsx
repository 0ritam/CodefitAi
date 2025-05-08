import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

const Homepage =() => {
  return (
    <div>
      Home Pgge

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
      

    </div>
  )
}

export default Homepage;