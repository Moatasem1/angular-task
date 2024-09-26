import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(text: string |null, searhQuery: string): string | null {

   //ToDo: prevent XSS vulnerabilities here by sanitizing input and return safe HTML
   searhQuery = searhQuery.trim().toLowerCase();

    if(!text || !searhQuery) return text;

    const highlightTextStartPos = text.toLocaleLowerCase().indexOf(searhQuery);

    if(highlightTextStartPos==-1) return text;

    const highlightTextEndPos = highlightTextStartPos + searhQuery.length;
    const textBeforeHighlightText = text.slice(0,highlightTextStartPos);
    const highlightText = text.slice(highlightTextStartPos,highlightTextEndPos);
    const textAfterHighlightText = text.slice(highlightTextEndPos);

    return `${textBeforeHighlightText}<span class='highlight'>${highlightText}</span>${textAfterHighlightText}`;
  }
}
