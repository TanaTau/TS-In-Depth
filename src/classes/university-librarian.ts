import { logger, sealed, writable, logParameter, logMethod, format } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    prop: string = 'Additional property';

    // @logMethod
    assistCustomer(/*@logParameter*/ custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    assistCustomer2(@logParameter custName: string, @logParameter custName2: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
