import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalHistoryComponent } from './journal-history/journal-history.component';
import { AddJournalComponent } from './add-journal/add-journal.component';

const routes: Routes = [
  {path : '/add-journal', component: AddJournalComponent },
  {path : 'journal-history', component: JournalHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
