using Microsoft.AspNetCore.SignalR;

namespace chatUser.Models
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(string user , string message)
        {
             await Clients.All.SendAsync("receiveMessage",user, message);
        }
    }
}
