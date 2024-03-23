import {Either, Left, Right} from "purify-ts";

export function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

// let s = throwError("msg")

export const divide = (a: number, b:number): number | never => {
    if(b != 0) {
        return a/b
    } else {
        // throwError("Nie dziel przez zero !")
        throw new Error("Nie dziel przez zero!");
    }
}

export const divideEither = (a: number, b:number): Either<Error, number> => {
    if(b != 0) {
        return Right(a/b)
    } else {
        return Left(new Error("Nie dziel przez zero!"))
    }
}




