import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentsComponent } from "./components/students/students.component";

const routes: Routes = (
    [
        {
            path: "",
            component: FooterComponent
        },
        {
            path: "students",
            component: StudentsComponent
        },
        {
            path: "students/:studentId",
            component: StudentComponent
        },
        {
            path: "**",
            component: ErrorPageComponent
        }
    ])


export const AppRouting = RouterModule.forRoot(routes);