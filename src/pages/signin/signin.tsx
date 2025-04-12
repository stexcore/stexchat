import { Link } from "react-router";
import Tab from "../../components/Tab/Tabs";
import TabItem from "../../components/Tab/TabItem";
import Button from "../../components/Button/Button";
import { LoginIcon, NextStepIcon, SecureIcon } from "../../icons/icons";
import InputPhone from "../../components/InputPhone/InputPhone";
import Box from "../../components/Box/Box";
import Typography from "../../components/Typography/Typography";

export default function SignInPage() {
    return (
        <main>
            <h2>Login On Your Account</h2>
            <div>
                <Tab defaultValue="Login">
                    <TabItem value="Login">
                        <LoginIcon size="md"></LoginIcon> Login
                    </TabItem>
                    <TabItem value="Verification">
                        <SecureIcon size="md"></SecureIcon> Verification
                    </TabItem>
                </Tab>
            </div>
            <Box py={12}>
                <InputPhone label="Phone Number" />
            </Box>
            <Box pt={30} pb={40} display="flex" justifyContent="center">
                <Button>
                    <NextStepIcon/>
                    Next Step
                </Button>
            </Box>
            <Typography type="secondary" size="sm" textAlign="center">
                Don't have an account? <Link to="/signup">SignUp</Link>
            </Typography>
        </main>
    );
}