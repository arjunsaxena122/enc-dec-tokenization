import { Request, Response } from "express";
import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const tikToken = new Tiktoken(o200k_base);

const encodedTokenFromUserInput = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (typeof token !== "string")
      throw new Error(`Invalid user input ${token}`);
    const encToken = tikToken.encode(token);
    if (!encToken)
      throw new Error(`encoded token doesn't make it   ${encToken}`);
    res.status(200).json({
      data: encToken,
      success: true,
      message: "user input would be convert into encoded token",
    });
  } catch (error) {
    throw new Error(`ERROR: coming from encode user Input data:- ${error}`);
  }
};

const decodedDataFromEncodedToken = async (req: Request, res: Response) => {
  try {
    const { encodedToken } = req.body;
    if (!encodedToken) return new Error("In request body token doesn't exist");

    const decToken = tikToken.decode(encodedToken);

    if (!decToken) throw new Error("token isn't decode");

    res.status(200).json({
      data: decToken,
      success: true,
      message: "Token would be converted into human readable format",
    });
  } catch (error) {
    throw new Error(`ERROR: coming from decode token:- ${error}`);
  }
};

export { encodedTokenFromUserInput, decodedDataFromEncodedToken };
