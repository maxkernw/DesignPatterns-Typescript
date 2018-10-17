interface IView {
    Accept(operation: IUserOperation): void
};

interface IUserOperation {
    NavigateHome(home: HomePage): void;
    NavigateAbout(about: AboutPage): void;
    NavigatePolicy(policy: PolicyPage): void;
}

class HomePage implements IView {
    Navigate(): void {
        console.log("Navigate to Home")
    }
    Accept(operation: IUserOperation): void {
        operation.NavigateHome(this)
    }
}

class AboutPage implements IView {
    Navigate(): void {
        console.log("Navigate to About")
    }
    Accept(operation: IUserOperation): void {
        operation.NavigateAbout(this)
    }
}

class PolicyPage implements IView {
    Navigate(): void {
        console.log("Navigate to Policy")
    }
    Accept(operation: IUserOperation): void {
        operation.NavigatePolicy(this)
    }
}

class User implements IUserOperation {
    NavigateHome(home: HomePage): void {
        home.Navigate();
    }
    NavigateAbout(about: AboutPage): void {
        about.Navigate();
    }
    NavigatePolicy(policy: PolicyPage): void {
        policy.Navigate();
    }
}

class Visitor implements IUserOperation {
    NavigateHome(home: HomePage): void {
        home.Navigate();
    }
    NavigateAbout(about: AboutPage): void {
        console.log("Please Login")
    }
    NavigatePolicy(policy: PolicyPage): void {
        console.log("Please Login")
    }


}

const homePage = new HomePage();
const aboutPage = new AboutPage();
const policyPage = new PolicyPage();

const visitor = new Visitor();
const user = new User();

policyPage.Accept(visitor);
homePage.Accept(user);