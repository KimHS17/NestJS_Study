import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() // 비어있는지 확인
  title: string;

  @IsNotEmpty() // 비어있는지 확인
  description: string;
}
