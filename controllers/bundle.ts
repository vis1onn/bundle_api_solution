import { Request, Response, NextFunction } from 'express';
import { requestData1, requestData2, requestData3 } from '../api/index';
import { DataBundle } from '../interfaces/dataBundle';
import { Data1Item, Data2Item, Data3Item } from '../interfaces/dataItem';
import { makeNamesUnique } from '../utils/unique';

export async function getBundle(req: Request, res: Response, next: NextFunction) {
  try {
    const result: PromiseSettledResult<unknown>[] = await Promise.allSettled([
      requestData1() as Promise<Data1Item[]>,
      requestData2() as Promise<Data2Item[]>,
      requestData3() as Promise<Data3Item[]>,
    ]);

    const [data1, data2, data3] = result.map((item) => {
      return item.status === 'fulfilled' ? (item.value as any) : []
    });
  
    const bundle: DataBundle = {
      data3: makeNamesUnique<Data3Item>(data3, 'name', 'id'),
      data1, data2,
    };
  
    res.status(200).json(bundle);
  } catch (error) {
    next(error);
  }
}
